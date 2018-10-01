/// <reference types="react" />

declare module 'zent/lib/checkbox' {

  namespace CheckBoxGroup {

    export interface IProps<T = any> {
      value: T[]
      isValueEqual?: (value1: T, value2: T) => boolean
      disabled?: boolean
      readOnly?: boolean
      onChange?: (values: T[]) => void
      className?: string
      prefix?: string
    }

  }

  namespace CheckBox {

    import Group = CheckBoxGroup;

    export interface IProps<T = any> {
      checked?: boolean
      value?: T
      disabled?: boolean
      readOnly?: boolean
      indeterminate?: boolean
      onChange?: React.ChangeEventHandler<HTMLInputElement>
      className?: string
      prefix?: string
    }

    export {
      Group
    }

  }

  class CheckBox<T = any> extends React.Component<CheckBox.IProps<T>, any> { }

  class CheckBoxGroup<T = any> extends React.Component<CheckBoxGroup.IProps<T>, any> { }

  export default CheckBox
}