import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'

import UniversitiesDetailView from '@/components/MainViewing/UniversitiesDetailView'
import UniversitiesListView from '@/components/MainViewing/UniversitiesListView'

import CountriesDetailView from '@/components/MainViewing/CountriesDetailView'
import CountriesListView from '@/components/MainViewing/CountriesListView'

import SubjectsDetailView from '@/components/MainViewing/SubjectsDetailView'
import SubjectsListView from '@/components/MainViewing/SubjectsListView'
import ProgramsView from '@/components/MainViewing/ProgramsView'

import UniversityDetails from '@/components/EachUniversityPage/UniversityDetails'

import SignUp from '@/components/Authentication/SignUp'
import SignIn from '@/components/Authentication/SignIn'
import SignUpValidation from '@/components/Authentication/SignUpValidation'
import RenewPassword from '@/components/Authentication/RenewPassword'

import ApplicantEditProfile from '@/components/PersonalPage-Applicant/EditProfile'
import ApplicantPersonalInfo from '@/components/PersonalPage-Applicant/PersonalInfo'
import ApplicantChangePassword from '@/components/PersonalPage-Applicant/ChangePassword'
import ApplicantCV from '@/components/PersonalPage-Applicant/CV'
import ApplicantMyAdvisors from '@/components/PersonalPage-Applicant/MyAdvisors'
import ApplicantAdvisorsList from '@/components/PersonalPage-Applicant/AdvisorsList'
import ApplicantMyUniversities from '@/components/PersonalPage-Applicant/MyUniversities'

import AdvisorEditProfile from '@/components/PersonalPage-Advisor/EditProfile'
import AdvisorPersonalInfo from '@/components/PersonalPage-Advisor/PersonalInfo'
import AdvisorChangePassword from '@/components/PersonalPage-Advisor/ChangePassword'
import AdvisorCV from '@/components/PersonalPage-Advisor/CV'
import AdvisorEditCV from '@/components/PersonalPage-Advisor/EditCV'
import AdvisorMyApplicants from '@/components/PersonalPage-Advisor/MyApplicants'
import AdvisorApplicantsList from '@/components/PersonalPage-Advisor/ApplicantsList'

import AdminChangePassword from '@/components/AdminPanel/ChangePassword'
import EditAdvisorPersonal from '@/components/AdminPanel/EditAdvisorPersonal'
import EditAdvisorCV from '@/components/AdminPanel/EditAdvisorCV'
import AdminEmailVerification from '@/components/AdminPanel/EmailVerification'
import AdminSearchUsers from '@/components/AdminPanel/SearchUsers'
import EditApplicantPersonal from '@/components/AdminPanel/EditApplicantPersonal'

import Home from '@/components/Home'
import Test from '@/components/Test'
import ResponsiveTest from '@/components/ResponsiveTest'

import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/h',
      name: 'h',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/universitiesdetail',
      name: 'UniversitiesDetailView',
      component: UniversitiesDetailView
    },
    {
      path: '/countriesdetail',
      name: 'CountriesDetailView',
      component: CountriesDetailView
    },
    {
      path: '/:countryName/:universityName',
      name: 'UniversityDetails',
      component: UniversityDetails
    },
    {
      path: '/universitieslist',
      name: 'UniversitiesListView',
      component: UniversitiesListView
    },
    {
      path: '/countrieslist',
      name: 'CountriesListView',
      component: CountriesListView
    },
    {
      path: '/subjectsdetail',
      name: 'SubjectsDetailView',
      component: SubjectsDetailView
    },
    {
      path: '/subjectslist',
      name: 'SubjectsListView',
      component: SubjectsListView
    },
    {
      path: '/subjects/:programName',
      name: 'ProgramsView',
      component: ProgramsView
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signupvalidation',
      name: 'SignUpValidation',
      component: SignUpValidation
    },
    {
      path: '/renewpassword',
      name: 'RenewPassword',
      component: RenewPassword
    },
    {
      path: '/personalinfoapplicant',
      name: 'ApplicantPersonalInfo',
      component: ApplicantPersonalInfo
    },
    {
      path: '/editprofileapplicant',
      name: 'ApplicantEditProfile',
      component: ApplicantEditProfile
    },
    {
      path: '/myadvisorsapplicant',
      name: 'ApplicantMyAdvisors',
      component: ApplicantMyAdvisors
    },
    {
      path: '/advisorslistapplicant',
      name: 'ApplicantAdvisorsList',
      component: ApplicantAdvisorsList
    },
    {
      path: '/cvapplicant',
      name: 'ApplicantCV',
      component: ApplicantCV
    },
    {
      path: '/myuniversitiesapplicant',
      name: 'ApplicantMyUniversities',
      component: ApplicantMyUniversities
    },
    {
      path: '/changepasswordapplicant',
      name: 'ApplicantChangePassword',
      component: ApplicantChangePassword
    },
    {
      path: '/personalinfoadvisor',
      name: 'AdvisorPersonalInfo',
      component: AdvisorPersonalInfo
    },
    {
      path: '/editprofileadvisor',
      name: 'AdvisorEditProfile',
      component: AdvisorEditProfile
    },
    {
      path: '/myapplicantsadvisor',
      name: 'AdvisorMyApplicants',
      component: AdvisorMyApplicants
    },
    {
      path: '/applicantslistadvisor',
      name: 'AdvisorApplicantsList',
      component: AdvisorApplicantsList
    },
    {
      path: '/cvadvisor',
      name: 'AdvisorCV',
      component: AdvisorCV
    },
    {
      path: '/editcvadvisor',
      name: 'AdvisorEditCV',
      component: AdvisorEditCV
    },
    {
      path: '/changepasswordadvisor',
      name: 'AdvisorChangePassword',
      component: AdvisorChangePassword
    },
    {
      path: '/editadvisorpersonal',
      name: 'EditAdvisorPersonal',
      component: EditAdvisorPersonal
    },
    {
      path: '/editadvisorcv',
      name: 'EditAdvisorCV',
      component: EditAdvisorCV
    },
    {
      path: '/editapplicantpersonal',
      name: 'EditApplicantPersonal',
      component: EditApplicantPersonal
    },
    {
      path: '/searchusersadmin',
      name: 'AdminSearchUsers',
      component: AdminSearchUsers
    },
    {
      path: '/emailverificationadmin',
      name: 'AdminEmailVerification',
      component: AdminEmailVerification
    },
    {
      path: '/changepasswordadmin',
      name: 'AdminChangePassword',
      component: AdminChangePassword
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/responsivetest',
      name: 'ResponsiveTest',
      component: ResponsiveTest
    }
  ]
})
