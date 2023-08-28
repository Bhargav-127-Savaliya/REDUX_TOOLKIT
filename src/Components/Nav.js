import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-800 sticky top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    // src="https://seeklogo.com/images/M/magento-logo-3EDB101875-seeklogo.com.png"
                    src="data:image/png;base64,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"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>

                </button>
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg?w=2000"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
