import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class FormComponent extends Component {
  get messages() {
    let messages = this.args.messages;

    if (typeof messages === 'object' && !Array.isArray(messages)) {
      messages = Object.keys(messages).reduce((acc, m) => {
        if (!Array.isArray(messages[m])) {
          return acc
        }

        return [...acc, ...messages[m]];
      }, [])
    }

    if (!Array.isArray(messages)) {
      return undefined
    }

    messages = messages.reduce((acc, m) => {
      if (!m.type) {
        return acc;
      }

      if (!Array.isArray(acc[m.type])) {
        acc[m.type] = []
      }

      if(this.args.for === undefined){
        acc[m.type].push(m);
      }

      if (this.args.for !== undefined && m.key.startsWith(this.args.for)) {
        m = { ...m, key: m.key.substr(this.args.for.length + 1) };

        if (m.key === "") {
          delete m.key;
        }

        acc[m.type].push(m);
      }

      if(!acc[m.type].length){
        delete acc[m.type]
      }

      return acc;
    }, {});

    return messages
  }

  @action
  onSubmit(e) {
    e.preventDefault();

    if (typeof this.args.onSubmit === 'function') {
      this.args.onSubmit()
    }
  }

  @action
  onChange(data, _for, value, path) {
    if (typeof this.args.onChange === 'function') {
      this.args.onChange(data, _for, value, path || this.path)
    }
  }
}
