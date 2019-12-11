import Controller from "@ember/controller";
import { action} from '@ember/object';

export default class ApplicationController extends Controller {
  messages = {};

  @action
  async onChange(obj, _for, value, path) {
    console.log("do some validations", obj, _for, value, path)
    // await schema.validate(data, { abortEarly: false, });
  }

  @action
  async onSubmit(sample) {}
}
