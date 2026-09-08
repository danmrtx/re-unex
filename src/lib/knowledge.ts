import {
  ADMISSION_METHODS,
  CAMPUSES_DATA,
  COURSES_DATA,
  FAQ_DATA
} from '@/data/unexData';

const CATEGORY_LABELS: Record<string, string> = {
  saude: 'Saúde',
  juridico: 'Jurídico',
  negocios_tech: 'Negócios e Tecnologia'
};

function buildAdmissionSection(): string {
  const items = ADMISSION_METHODS.map((method) =>
    [
      `### ${method.title} (${method.badge})`,
      method.subtitle,
      ...method.benefits.map((benefit) => `- ${benefit}`),
      `CTA: ${method.ctaText} → ${method.ctaLink}`
    ].join('\n')
  );

  return ['## Formas de ingresso', ...items].join('\n\n');
}

function buildCoursesSection(): string {
  const items = COURSES_DATA.map((course) =>
    [
      `### ${course.name}`,
      `Grau: ${course.degree} | Área: ${CATEGORY_LABELS[course.category] ?? course.category} | Duração: ${course.duration} | Turno: ${course.period} | Nota MEC: ${course.mecRating}`,
      `Campi: ${course.campuses.join(', ')}`,
      `Destaque: ${course.highlight}`,
      course.description,
      `Grade: ${course.curriculumHighlights.join('; ')}`,
      `Mercado: ${course.jobMarket}`
    ].join('\n')
  );

  return ['## Cursos', ...items].join('\n\n');
}

function buildCampusesSection(): string {
  const items = CAMPUSES_DATA.map((campus) =>
    [
      `### ${campus.city} — ${campus.name}`,
      `Endereço: ${campus.address}, CEP ${campus.cep}`,
      `Telefone: ${campus.phone} | E-mail: ${campus.email}`,
      campus.description,
      `Diferenciais: ${campus.features.join('; ')}`,
      `Cursos em destaque: ${campus.featuredCourses.join(', ')}`
    ].join('\n')
  );

  return ['## Unidades', ...items].join('\n\n');
}

function buildFaqSection(): string {
  const items = FAQ_DATA.map((item) => `### [${item.category}] ${item.question}\n${item.answer}`);

  return ['## Perguntas frequentes', ...items].join('\n\n');
}

/**
 * Serializa os dados institucionais da Unex em Markdown simples para uso
 * direto no system prompt (abordagem sem RAG: todo o conhecimento cabe no contexto).
 * Campos visuais (imagens, cores, mapas), notícias e depoimentos ficam de fora.
 */
export function buildKnowledgeBase(): string {
  return [
    buildAdmissionSection(),
    buildCoursesSection(),
    buildCampusesSection(),
    buildFaqSection()
  ].join('\n\n');
}
