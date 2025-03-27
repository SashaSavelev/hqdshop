export default interface AuthState {
    isLoggedIn: boolean;
    logout: () => void;
}
