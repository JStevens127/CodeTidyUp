import { Transition } from '@headlessui/react'
import { Fragment, type PropsWithChildren } from 'react'

export default function DefaultTransition({ children }: PropsWithChildren<unknown>) {
    return (
        <Transition
            as={Fragment}
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'>
            {children}
        </Transition>
    )
}
