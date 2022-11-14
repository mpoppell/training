import { mount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm'

describe('LoginForm', () => {
it('emits an event with a user data payload', ()=>{
    const wrapper = mount(LoginForm) 
    // 1. Find text input
    const input = wrapper.find('[datatest-id="name-input"]')
    // 2. Set value for text input
    input.setValue('Matthew Poppell')
    // 3. Simulate form submission
    wrapper.trigger('submit')
    // 4. Assert event has been emitted
    const formSubmittedCalls = wrapper.emitted('formSubmitted')
    expect(formSubmittedCalls).toHaveLength(1)
    // 5. Assert payload is correct
    const expectedPayload = { name: 'Matthew Poppell'}
    expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)

})
  })



// describe('AppHeader', () => {
//     test('if user is not logged in, do not show logout button', () => {
//       // test body
//       expect(true).toBe(true)
//     })
  
//     test('if a user is logged in, show logout button', () => {
//       // test body
//       expect(true).toBe(true)
//     })
//   })
  