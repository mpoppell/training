import { mount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader'

describe('AppHeader', () => {
  test('if user is not logged in, do not show logout button', () => {
    // test body
    const wrapper = mount(AppHeader)
    expect(wrapper.find('button').isVisible()).toBe(false)
    // expect(true).toBe(true)
  })

  test('if a user is logged in, show logout button', async () => {
    // test body
    const wrapper = mount(AppHeader)
    await wrapper.setData({loggedIn: true})

    expect(wrapper.find('button').isVisible()).toBe(true)
    // expect(true).toBe(true)
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
  