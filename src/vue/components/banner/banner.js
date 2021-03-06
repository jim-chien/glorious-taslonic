import bannerService from '@base/services/banner/banner';
import { button } from '@vue/components/button/button';
import template from './banner.html';

export const banner = {
  name: 't-banner',
  components: {
    tButton: button
  },
  props: ['theme', 'triggerText', 'onTriggerClick', 'onClose'],
  data(){
    return {
      isVisible: true
    };
  },
  methods: {
    onCloseButtonClick(){
      this.setVisibility(false);
      return this.onClose && this.onClose();
    },
    setVisibility(isVisible){
      this.isVisible = isVisible;
    }
  },
  computed: {
    classes(){
      const { theme } = this;
      return bannerService.buildCssClasses({ theme });
    }
  },
  template
};
