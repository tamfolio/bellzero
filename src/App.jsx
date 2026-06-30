import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './router'

const router = createRouter({ routeTree })

export default function App() {
  return <RouterProvider router={router} />
}
