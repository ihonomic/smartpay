export interface IUser {
  // DATA
  isAuthenticated: boolean;
  isOnboardingCompleted: boolean;
  isUserSecurityPinRequired: boolean;
  userInfo: {
    user: {
      full_name: string;
      username: string;
      email: string;
      country: string;
      id: string;
    };
    token: string;
  };
  userPin: null | string;

  // ACTION
  saveUser: (data: any) => void;
  saveUserPin: (data: any) => void;
  logoutUser: () => void;
  setOnboardingCompleted: () => void;
  toogleSecurityPinEnabled: () => void;
  setUserMustEnterSecurityPin: (action: boolean) => void;
}
