import { Vue, Component } from 'vue-property-decorator'
import template from './component.html'
import './component.scss'

@Component({
	template
})
export class PageTwoComponent extends Vue {
	mounted () {
		console.log(111)
	}
}
