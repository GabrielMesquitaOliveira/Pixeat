import ClientDashboard from './ClientDashboard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
  robots: {
    index: false,
    follow: false,
    nocache: true,
    noarchive: true,
    nosnippet: true,
  },
}

export default function DashboardLayout() {
  return <ClientDashboard />
}
