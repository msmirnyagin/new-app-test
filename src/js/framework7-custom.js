
import Framework7, { utils, getDevice, createStore } from 'framework7/lite';
import Sheet from 'framework7/components/sheet';
import Panel from 'framework7/components/panel';

Framework7.use([
  Sheet,
  Panel
]);

export default Framework7;
export { utils, getDevice, createStore };
