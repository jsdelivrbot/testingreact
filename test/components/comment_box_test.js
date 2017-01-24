import { renderComponent, expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () => {
	let component;

	beforeEach(() => {
		component = renderComponent(CommentBox);		
	});
	it('has a button', () => {
		expect(component.find('button')).to.exist;
	});

	describe('Textarea', () => {
		let textarea;
		beforeEach(()=> {
			textarea = component.find('textarea');
		})
		it('exists', () => {
			expect(textarea).to.exist;
		});
		
		it('has the correct class', () => {
			expect(textarea).to.have.class('form-control');
		});
		describe('entering text', () => {
			beforeEach(()=>{
				textarea.simulate('change', 'new comment');
			})
			it('shows text', () => {
				expect(textarea).to.have.value('new comment');
			});

			it('when submitted, clears the input', () => {
				component.simulate('submit');
				expect(textarea).to.have.value('');
			})
		})
	})
	
})