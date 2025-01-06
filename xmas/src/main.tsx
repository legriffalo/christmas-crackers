import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { defineCustomElements as jeepSqlite } from 'jeep-sqlite/loader';
import { Capacitor } from '@capacitor/core';
import { CapacitorSQLite, SQLiteConnection } from '@capacitor-community/sqlite';

jeepSqlite(window);

const platform = Capacitor.getPlatform();
if (platform === 'web') {
  // Create SQL.js worker
  const sqlitePlugin = new SQLiteConnection(CapacitorSQLite);
  // Create worker thread
  sqlitePlugin.initWebStore();
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
