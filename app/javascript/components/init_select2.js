import $ from 'jquery';
import 'select2';

const initSelect2 = () => {
  $('.select2').select2();
  console.log('select2')
};

export { initSelect2 };
