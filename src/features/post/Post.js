import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Post.module.scss';

export function Post() {
  const dispatch = useDispatch();

  return <div>Post Component!</div>;
}
