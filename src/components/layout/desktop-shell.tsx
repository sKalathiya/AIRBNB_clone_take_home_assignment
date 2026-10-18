import type { ReactNode } from 'react'

interface DesktopShellProps {
  children: ReactNode
}

const DesktopShell = ({ children }: DesktopShellProps) => {
  return <div className="min-h-screen bg-white">{children}</div>
}

export { DesktopShell }
export default DesktopShell
