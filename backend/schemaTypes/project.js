export default {
  name: 'project',
  title: 'Projet',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre (FR)',
      type: 'string',
    },
    {
      name: 'title_en',
      title: 'Title (EN)',
      type: 'string',
    },
    {
      name: 'title_pt',
      title: 'Título (PT)',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Rénovation', value: 'renovation'},
          {title: 'Transaction & Rénovation', value: 'transaction-renovation'},
        ],
      },
    },
    {
      name: 'location',
      title: 'Localisation',
      type: 'string',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'string',
      // Vous pouvez également utiliser le type "date" si vous souhaitez stocker une date complète
    },
    {
      name: 'budget',
      title: 'Budget',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'description',
      title: 'Description (FR)',
      type: 'text',
    },
    {
      name: 'description_en',
      title: 'Description (EN)',
      type: 'text',
    },
    {
      name: 'description_pt',
      title: 'Descrição (PT)',
      type: 'text',
    },
    {
      name: 'challenge',
      title: 'Challenge (FR)',
      type: 'text',
    },
    {
      name: 'challenge_en',
      title: 'Challenge (EN)',
      type: 'text',
    },
    {
      name: 'challenge_pt',
      title: 'Desafio (PT)',
      type: 'text',
    },
    {
      name: 'solution',
      title: 'Solution (FR)',
      type: 'text',
    },
    {
      name: 'solution_en',
      title: 'Solution (EN)',
      type: 'text',
    },
    {
      name: 'solution_pt',
      title: 'Solução (PT)',
      type: 'text',
    },
    {
      name: 'results',
      title: 'Résultats (FR)',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'results_en',
      title: 'Results (EN)',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'results_pt',
      title: 'Resultados (PT)',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'gallery',
      title: 'Galerie',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {hotspot: true},
            },
            {
              name: 'position',
              title: 'Position',
              type: 'string',
              options: {
                list: [
                  {title: 'Center', value: 'center'},
                  {title: 'Top', value: 'top'},
                  {title: 'Bottom', value: 'bottom'},
                ],
              },
            },
          ],
        },
      ],
    },
  ],
}
