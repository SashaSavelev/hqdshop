export const fetchSession = async (sessionCookie: string) => {
  try {
    const response = await fetch('http://localhost:8081/api/session', {
      method: 'GET',
      headers: {
        Cookie: `sessionId=${sessionCookie}`,
      },
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Ошибка при получении сессии');
    }

    const data = await response.json();
    return data.session;
  } catch (error) {
    console.error('fetchSession error:', error);
    return null;
  }
};
