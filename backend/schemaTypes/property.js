export default {
  name: 'property',
  title: 'Bien Immobilier',
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
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'À vendre', value: 'vente'},
          {title: 'À louer', value: 'location'},
        ],
        layout: 'radio',
      },
    },
    {
      name: 'price',
      title: 'Prix',
      type: 'number',
    },
    {
      name: 'location',
      title: 'Localisation',
      type: 'string',
    },
    {
      name: 'bedrooms',
      title: 'Nombre de chambres',
      type: 'number',
    },
    {
      name: 'bathrooms',
      title: 'Nombre de salles de bain',
      type: 'number',
    },
    {
      name: 'surface',
      title: 'Surface (m²)',
      type: 'number',
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
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
      name: 'features',
      title: 'Caractéristiques (FR)',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'features_en',
      title: 'Features (EN)',
      type: 'array',
      of: [{type: 'string'}],
    },
    {
      name: 'features_pt',
      title: 'Características (PT)',
      type: 'array',
      of: [{type: 'string'}],
    },
  ],
}
