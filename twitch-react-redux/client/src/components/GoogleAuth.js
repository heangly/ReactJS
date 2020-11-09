import React, { useState, useEffect } from 'react';
import { signIn, signOut } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const GoogleAuth = () => {
  const [auth, setAuth] = useState('');
  const dispatch = useDispatch();
  const { isSignedIn } = useSelector((state) => state.auth);

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '568054118299-jufumett4ujkc2qt9bjnrhjr6c90qcf0.apps.googleusercontent.com',
          scope: 'email',
        })
        .then(() => {
          setAuth(window.gapi.auth2.getAuthInstance());
          if (auth.isSignedIn) {
            onAuthChange(auth.isSignedIn.get());
            // listen , invoke everytime the auth change
            auth.isSignedIn.listen(onAuthChange);
          }
        });
    });
  }, [auth.isSignedIn]);

  const onAuthChange = (isSignedIn) => {
    const userId = auth.currentUser.get().getId();
    if (isSignedIn) {
      dispatch(signIn(userId));
    } else {
      dispatch(signOut());
    }
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button className='ui red google button' onClick={onSignOutClick}>
          <i className='google icon' />
          Sign Out
        </button>
      );
    } else {
      return (
        <button className='ui green google button' onClick={onSignInClick}>
          <i className='google icon' />
          Sign In With Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

export default GoogleAuth;
