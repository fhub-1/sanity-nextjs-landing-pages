export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6241b3e7e214c118876f928f',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-k5srvgg2',
                  apiId: '43e9e32f-0e26-4a3b-9ff1-e09dc1abc211'
                },
                {
                  buildHookId: '6241b3e740c98515f843d763',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-7jyq3o3w',
                  apiId: '8a9477a9-ed52-4631-be36-bd51f4fd5d5a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fhub-1/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-7jyq3o3w.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
