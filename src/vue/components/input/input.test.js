import { shallowMount } from '@vue/test-utils';
import { formControl } from '@vue/components/form-control/form-control';
import { input } from './input';

describe('Input', () => {
  function mount({ listeners = {}, ...propsData } = {}){
    return shallowMount(input, { propsData, listeners });
  }

  it('should pass value to form control', () => {
    const value = 'Rafael';
    const wrapper = mount({ value });
    expect(wrapper.findComponent(formControl).props('value')).toEqual(value);
  });

  it('should pass validations to form control', () => {
    const validations = [];
    const wrapper = mount({ validations });
    expect(wrapper.findComponent(formControl).props('validations')).toEqual(validations);
  });

  it('should pass blocked to form control', () => {
    const blocked = true;
    const wrapper = mount({ blocked });
    expect(wrapper.findComponent(formControl).props('blocked')).toEqual(blocked);
  });

  it('should form control query for an input', () => {
    const wrapper = mount();
    expect(wrapper.findComponent(formControl).props('querySelector')).toEqual('input');
  });

  it('should input contain an attribute type as text by default', () => {
    const wrapper = mount();
    expect(wrapper.find('input').attributes('type')).toEqual('text');
  });

  it('should type be text if an invalid type has been given', () => {
    const wrapper = mount({ type: 'checkbox' });
    expect(wrapper.find('input').attributes('type')).toEqual('text');
  });

  it('should optionally set an input type', () => {
    const type = 'password';
    const wrapper = mount({ type });
    expect(wrapper.find('input').attributes('type')).toEqual(type);
  });

  it('should optionally set a placeholder', () => {
    const placeholder = 'Enter a name';
    const wrapper = mount({ placeholder });
    expect(wrapper.find('input').attributes('placeholder')).toEqual(placeholder);
  });

  it('should not be disabled by default', () => {
    const wrapper = mount();
    expect(wrapper.find('input').attributes('disabled')).not.toBeDefined();
  });

  it('should optionally set input as disabled', () => {
    const wrapper = mount({ disabled: true });
    expect(wrapper.find('input').attributes('disabled')).toEqual('disabled');
  });

  it('should not be required by default', () => {
    const wrapper = mount();
    expect(wrapper.find('input').attributes('required')).not.toBeDefined();
  });

  it('should optionally set input as required', () => {
    const wrapper = mount({ required: true });
    expect(wrapper.find('input').attributes('required')).toEqual('required');
  });

  it('should optionally set input listeners', () => {
    const onBlur = jest.fn();
    const wrapper = mount({ listeners: { blur: onBlur } });
    wrapper.find('input').trigger('blur');
    expect(onBlur).toHaveBeenCalled();
  });
});
