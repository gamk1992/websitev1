const handleSignIn = async () => {
    setError('');
    if (role === 'Team') {
      try {
        const response = await fetch('https://monti-keopi-backend.marketing-montikeopi.workers.dev/api/partner/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: username, password }) // Using username field as email
        });

        const data = await response.json();

        if (data.success) {
          localStorage.setItem('token', data.token);
          localStorage.setItem('role', data.role);
          onLoginSuccess();
          onClose();
          navigate('/special-portal');
        } else {
          setError(data.error || 'Invalid credentials.');
        }
      } catch (err) {
        setError('Connection to backend failed.');
      }
    } else {
      setError('Chingu access on our way.');
    }
  };
