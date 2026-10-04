import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import App from './App_RPS'; // 

describe('RPS_unit_Testing', () => {
  
  it('test if Player 1 win', () => {
    render(<App />);
    
    fireEvent.press(screen.getByTestId('P1_btn_Rock'));
    fireEvent.press(screen.getByTestId('P2_btn_Scissor'));
    fireEvent.press(screen.getByTestId('Process_btn'));
    expect(screen.getByTestId('Winner_Text').props.children).toBe('player 1 Win!');

  });

  it('test if Player 2 winn', () => {
    render(<App />);

    fireEvent.press(screen.getByTestId('P1_btn_Scissor'));
    fireEvent.press(screen.getByTestId('P2_btn_Rock'));
    fireEvent.press(screen.getByTestId('Process_btn'));
    expect(screen.getByTestId('Winner_Text').props.children).toBe('player 2 Win!');

  });

  it('test if nobody win', () => {
    render(<App />);
    
    fireEvent.press(screen.getByTestId('P1_btn_Paper'));
    fireEvent.press(screen.getByTestId('P2_btn_Paper'));
    fireEvent.press(screen.getByTestId('Process_btn'));
    expect(screen.getByTestId('Winner_Text').props.children).toBe('No body win!!!');

  });

  it('test if cancel', () => {
    render(<App />);
    
    fireEvent.press(screen.getByTestId('Restart_btn'));
    expect(screen.getByTestId('Winner_Text').props.children).toBe('-');
    expect(screen.getByTestId('Player_1_RPS').props.children).toBe('-');
    expect(screen.getByTestId('Player_2_RPS').props.children).toBe('-');

  });
});