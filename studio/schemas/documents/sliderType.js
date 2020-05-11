import {FaSliders} from 'react-icons/fa'

export default {
  name: 'sliderType',
  type: 'document',
  icon: FaSliders,
  title: 'Slider Type',
  fields: [
    {
      name: 'sliderName',
      type: 'string',
      title: 'Slider Type'
    },
    {
      name: 'sliderDescription',
      type: 'string',
      title: 'Slider Description'
    }
  ],
  preview: {
    select: {
      title: 'sliderName',
      subtitle: 'sliderDescription'
    }
  }
}
