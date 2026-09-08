'use client';

import React from 'react';

/**
 * Renderização mínima de Markdown para as respostas do assistente.
 * Suporta apenas: parágrafos (linha em branco), listas com "- "/"* " e **negrito**.
 * Nada de HTML injetado — tudo vira elementos React (sem dangerouslySetInnerHTML).
 */

type Block = { type: 'paragraph'; text: string } | { type: 'list'; items: string[] };

const BOLD_PATTERN = /\*\*(.+?)\*\*/g;
const LIST_ITEM_PATTERN = /^[-*]\s+/;

function parseBlocks(content: string): Block[] {
  const blocks: Block[] = [];
  let paragraphLines: string[] = [];
  let listItems: string[] = [];

  const flushParagraph = () => {
    if (paragraphLines.length > 0) {
      blocks.push({ type: 'paragraph', text: paragraphLines.join('\n') });
      paragraphLines = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({ type: 'list', items: listItems });
      listItems = [];
    }
  };

  for (const line of content.split('\n')) {
    const trimmed = line.trim();

    if (trimmed.length === 0) {
      flushParagraph();
      flushList();
      continue;
    }

    if (LIST_ITEM_PATTERN.test(trimmed)) {
      flushParagraph();
      listItems.push(trimmed.replace(LIST_ITEM_PATTERN, ''));
      continue;
    }

    flushList();
    paragraphLines.push(trimmed);
  }

  flushParagraph();
  flushList();

  return blocks;
}

/** Converte trechos entre ** em <strong>, mantendo o restante como texto puro. */
function renderInline(text: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  let cursor = 0;
  let key = 0;

  for (const match of text.matchAll(BOLD_PATTERN)) {
    const start = match.index ?? 0;

    if (start > cursor) {
      nodes.push(text.slice(cursor, start));
    }

    nodes.push(
      <strong key={`b-${key++}`} className="font-bold">
        {match[1]}
      </strong>
    );
    cursor = start + match[0].length;
  }

  if (cursor < text.length) {
    nodes.push(text.slice(cursor));
  }

  return nodes;
}

interface ChatMessageContentProps {
  content: string;
}

export function ChatMessageContent({ content }: ChatMessageContentProps) {
  const blocks = parseBlocks(content);

  return (
    <div className="space-y-2">
      {blocks.map((block, index) =>
        block.type === 'list' ? (
          <ul key={index} className="list-disc pl-4 space-y-1">
            {block.items.map((item, itemIndex) => (
              <li key={itemIndex}>{renderInline(item)}</li>
            ))}
          </ul>
        ) : (
          <p key={index} className="whitespace-pre-wrap">
            {renderInline(block.text)}
          </p>
        )
      )}
    </div>
  );
}
