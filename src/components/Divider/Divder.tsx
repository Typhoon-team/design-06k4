import React, { FC } from "react";
import { BasedProps } from '../basedTypes'
import classNames from "classnames";
import { getPreCls } from "../../shared";

// type DividerType = 
export interface BasedDividerProps extends BasedProps {
  dashbord: boolean,
  type: 'horizontal' | 'vertical'
}

// export type DivderProps = Partial<BasedDividerProps>

export const KDivider: FC<Partial<BasedDividerProps>> = (props) => {
  const {
    className,
    children,
    dashbord,
    type,
    ...resetProps
  } = props

  const hasChildren: boolean = !!children
  const prefixCls: string = getPreCls('divider')
  const cname = classNames(prefixCls, className, `${prefixCls}-${type}`, {
    [`${prefixCls}-with-child`]: hasChildren,
    [`${prefixCls}-dashed`]: dashbord
  })
  return (
    <>
      <div className={cname} {...resetProps}>
        {
          children && (
            <span className={`${prefixCls}-child`}>{children}</span>
          )
        }
      </div>
    </>
  )
}

KDivider.defaultProps = {
  dashbord: false,
  type: 'horizontal'
}

export default KDivider