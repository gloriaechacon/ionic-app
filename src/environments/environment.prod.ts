export const environment: {production :boolean, auth_config : any} = {
  production: true,
  auth_config: {
    client_id: 'android-client',
    server_host: 'http://192.168.0.20:44343',
    redirect_url: 'io.ionic.starter://callback',
    end_session_redirect_url: 'io.ionic.starter://endsession',
    scopes: 'openid offline_access kitchen.read',
    pkce: true
  }
};