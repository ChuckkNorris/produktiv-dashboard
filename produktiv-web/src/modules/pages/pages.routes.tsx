import { AuthLayout } from "modules/app/auth-layout/auth-layout.component"
import { MarketingLayout } from "modules/marketing/marketing-layout/marketing.layout"
import { AboutUsPage } from "modules/pages/about-us/about-us.page"
import DashboardPage from "modules/pages/dashboard/dashboard.page"
import { HomePage } from "modules/pages/home/home.page"
import { Route, Routes } from "react-router"

export const AuthLayoutRoutes = () => {
  return (
    <Routes>
       <Route element={<AuthLayout />} >
        <Route index element={<DashboardPage />}/>
        <Route path="about" element={<AboutUsPage />} />
      </Route>
      <Route path="dashboard" element={<AuthLayout />} >
        <Route index element={<HomePage />}/>
        <Route path="about" element={<AboutUsPage />} />
      </Route>
    </Routes>
  )
}
