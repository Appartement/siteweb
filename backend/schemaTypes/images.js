export default {
  name: 'images',
  type: 'document',
  title: 'Images',
  fields: [
    {
      name: 'photoRenovation',
      type: 'image',
      title: 'Photo Renovation',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'nosProjet',
      type: 'image',
      title: 'Nos Projets',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'contactUs',
      type: 'image',
      title: 'Contactez-nous',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photoLaure',
      type: 'image',
      title: 'Photo Laure Fargeot',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'photoJean',
      type: 'image',
      title: 'Photo Jean-Emmanuel Salvado',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
  ],
}
