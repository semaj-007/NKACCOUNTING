import { Link, Navigate, Route, Routes } from 'react-router-dom';

import { GuestRoute, ProtectedRoute } from './components/RouteGuards.jsx';

// --------------------------------------------------
// AUTHENTICATION / ONBOARDING
// --------------------------------------------------

import BusinessSetup from './pages/BusinessSetup.jsx';
import Dashboard from './pages/Dashboard.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Login from './pages/Login.jsx';
import Onboarding from './pages/Onboarding.jsx';
import OnboardingSuccess from './pages/OnboardingSuccess.jsx';
import ResetPassword from './pages/ResetPassword.jsx';
import RoleSelection from './pages/RoleSelection.jsx';
import SageConnection from './pages/SageConnection.jsx';
import Signup from './pages/Signup.jsx';

// --------------------------------------------------
// VOICE TRANSACTIONS
// --------------------------------------------------

import NewTransaction from './pages/transactions/NewTransaction.jsx';
import ManualTransaction from './pages/transactions/ManualTransaction.jsx';
import VoiceCapture from './pages/transactions/VoiceCapture.jsx';
import Clarification from './pages/transactions/Clarification.jsx';
import TransactionReview from './pages/transactions/TransactionReview.jsx';
import TransactionSuccess from './pages/transactions/TransactionSuccess.jsx';
import TransactionHistory from './pages/transactions/TransactionHistory.jsx';
import TransactionDetails from './pages/transactions/TransactionDetails.jsx';

// --------------------------------------------------
// ACCOUNTANT WORKSPACE
// --------------------------------------------------

import AccountantDashboard from './pages/accountant/AccountantDashboard.jsx';
import AccountantProfile from './pages/accountant/AccountantProfile.jsx';
import ApprovedTransactions from './pages/accountant/ApprovedTransactions.jsx';
import ClientManagement from './pages/accountant/Clients.jsx';
import ClientDetails from './pages/accountant/ClientDetails.jsx';
import ReturnedTransactions from './pages/accountant/ReturnedTransactions.jsx';
import AccountantTransactionReview from './pages/accountant/TransactionReview.jsx';

// --------------------------------------------------
// ROUTE HELPERS
// --------------------------------------------------

const guest = (element) => (
  <GuestRoute>
    {element}
  </GuestRoute>
);

const onboarding = (element) => (
  <ProtectedRoute requireOnboarded={false}>
    {element}
  </ProtectedRoute>
);

// --------------------------------------------------
// VOICEBOOKS APPLICATION
// --------------------------------------------------

export default function App() {
  return (
    <Routes>

      {/* --------------------------------------------------
          AUTHENTICATION
      -------------------------------------------------- */}

      <Route
        path="/login"
        element={guest(<Login />)}
      />

      <Route
        path="/signup"
        element={guest(<Signup />)}
      />

      <Route
        path="/signup/role"
        element={guest(<RoleSelection />)}
      />

      <Route
        path="/signup/business"
        element={guest(<BusinessSetup />)}
      />

      <Route
        path="/forgot-password"
        element={guest(<ForgotPassword />)}
      />

      <Route
        path="/reset-password"
        element={<ResetPassword />}
      />

      {/* --------------------------------------------------
          ONBOARDING
      -------------------------------------------------- */}

      <Route
        path="/onboarding"
        element={onboarding(<Onboarding />)}
      />

      <Route
        path="/onboarding/sage"
        element={onboarding(<SageConnection />)}
      />

      <Route
        path="/onboarding/success"
        element={
          <ProtectedRoute>
            <OnboardingSuccess />
          </ProtectedRoute>
        }
      />

      {/* --------------------------------------------------
          MAIN DASHBOARD
      -------------------------------------------------- */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* --------------------------------------------------
          VOICE TRANSACTIONS
      -------------------------------------------------- */}

      <Route
        path="/transactions/new"
        element={
          <ProtectedRoute>
            <NewTransaction />
          </ProtectedRoute>
        }
      />

      <Route
        path="/transactions/manual"
        element={
          <ProtectedRoute>
            <ManualTransaction />
          </ProtectedRoute>
        }
      />

      <Route
        path="/transactions/voice"
        element={
          <ProtectedRoute>
            <VoiceCapture />
          </ProtectedRoute>
        }
      />

      <Route
        path="/transactions/clarification"
        element={
          <ProtectedRoute>
            <Clarification />
          </ProtectedRoute>
        }
      />

      <Route
        path="/transactions/review"
        element={
          <ProtectedRoute>
            <TransactionReview />
          </ProtectedRoute>
        }
      />

      <Route
        path="/transactions/success"
        element={
          <ProtectedRoute>
            <TransactionSuccess />
          </ProtectedRoute>
        }
      />

      <Route
        path="/transactions"
        element={
          <ProtectedRoute>
            <TransactionHistory />
          </ProtectedRoute>
        }
      />

      <Route
        path="/transactions/:id"
        element={
          <ProtectedRoute>
            <TransactionDetails />
          </ProtectedRoute>
        }
      />

      {/* --------------------------------------------------
          ACCOUNTANT WORKSPACE
      -------------------------------------------------- */}

      <Route
        path="/accountant"
        element={
          <ProtectedRoute>
            <AccountantDashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/accountant/clients"
        element={
          <ProtectedRoute>
            <ClientManagement />
          </ProtectedRoute>
        }
      />

      <Route
        path="/accountant/clients/:id"
        element={
          <ProtectedRoute>
            <ClientDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/accountant/review/:id"
        element={
          <ProtectedRoute>
            <AccountantTransactionReview />
          </ProtectedRoute>
        }
      />

      <Route
        path="/accountant/approved"
        element={
          <ProtectedRoute>
            <ApprovedTransactions />
          </ProtectedRoute>
        }
      />

      <Route
        path="/accountant/returned"
        element={
          <ProtectedRoute>
            <ReturnedTransactions />
          </ProtectedRoute>
        }
      />

      <Route
        path="/accountant/profile"
        element={
          <ProtectedRoute>
            <AccountantProfile />
          </ProtectedRoute>
        }
      />

      {/* --------------------------------------------------
          DEFAULT ROUTE
      -------------------------------------------------- */}

      <Route
        path="/"
        element={
          <Navigate
            to="/dashboard"
            replace
          />
        }
      />

      {/* --------------------------------------------------
          PAGE NOT FOUND
      -------------------------------------------------- */}

      <Route
        path="*"
        element={
          <main className="notfound">
            <h1>Page not found</h1>

            <p>
              The page you're looking for doesn't exist.{' '}
              <Link to="/dashboard">
                Go to your dashboard
              </Link>
            </p>
          </main>
        }
      />

    </Routes>
  );
}