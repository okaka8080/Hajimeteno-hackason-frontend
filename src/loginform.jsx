import React, { useState} from "react";
import {signInWithPopup} from 'firebase/auth'
import {auth, provider} from './firebase';
import {useAuthState} from 'react-firebase-hooks/auth';
import axios from "axios";
import './login.css';

const url = "http://localhost:8000/post/user"

const onClickGet = async() => {
    await axios.post(url,
        {
            userid: auth.currentUser.uid,
            username: auth.currentUser.displayName
        }
    ).then((res) => {
        console.log(res.data);
      })
      .catch(function(error) {

        console.log(error);
      });
  }

export const Login =()=>{
    const [user] = useAuthState(auth);

    return (
        <div className="Login">
            <div className="bg_pattern Lines_v3"></div>
            <div className="Title">
                <h1>MyCanvas</h1>
            </div>
            {user ? (
                <>
                <UserInfo />
                <SignOutButton/>
                </>
            ): (
          <SignInButton />)}
        </div>
      );
}

function SignInButton(){
    const signInWithGoogle = () => {
        //firebase
        signInWithPopup(auth, provider);

    };
    return (
        <button onClick={() =>{
            signInWithGoogle();
            }}>
            <p>Googleアカウントでログイン</p>
        </button>
    )
}

function SignOutButton(){
    return (
        <>
        <button onClick= {() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
        <button onClick={() => onClickGet()}>
            <p>
                はじめる
            </p>
        </button>
    </>
    )
}

function UserInfo(){
    return (
        <div className="userInfo">
            <img src = {auth.currentUser.photoURL} alt=""/>
            <p>
                {auth.currentUser.displayName}さん
            </p>
        </div>
    );
}

export default Login;