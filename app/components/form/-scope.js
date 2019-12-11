import FormComponent from 'form-sample/components/form';
import { action, get, set } from '@ember/object';
import { dasherize } from '@ember/string';
import uuid from 'uuid';

export default class FormScopeComponent extends FormComponent {
  get id() {
    return [this.name, uuid()].join('-');
  }

  get name() {
    return dasherize([...this.path].filter(e => e).join('-').replace('.', '-'));
  }

  get for(){
    return this.args.for;
  }

  get path() {
    return [...(this.args.path || []), this.for]
  }

  get data() {
    const data = this.args.data;
    if (!data){
      return undefined
    }

    return get(data, this.for)
  }

  set data(value) {
    this.update(value);
  }

  get messages() {
    return super.messages
  }

  @action
  update(value, _for) {
    _for = [this.for, _for].filter(e => e).join('.');
    set(this.args.data, _for, value);
    this.onChange(this.args.data, _for, value)
  }
}
