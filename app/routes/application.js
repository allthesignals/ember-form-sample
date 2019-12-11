import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return {
      input: 'top level input',
      scope1: {
        input: 'scope1 input',
        checkbox: true,
        textarea: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        inlineInput: 'inlineInput',
      },
      a: {
        really: {
          really: {
            really: {
              deep: {
                scope: {
                  input: 'Lorem ipsum dolor',
                },
              },
            },
          },
        },
      },
    };
  }
}
