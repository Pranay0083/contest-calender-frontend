import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import styles from './UserProfile.module.css';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    atcoder: '',
    codechef: '',
    codeforces: '',
    codingNinjas: '',
    geeksForGeeks: '',
    leetcode: '',
  });

    const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: ''
  });

  const [showLogoutConfirmation, setShowLogoutConfirmation] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [notifications] = useState([
    {
      id: '1',
      title: 'Profile Update',
      message: 'Your LeetCode profile has been successfully linked!',
    },
    {
      id: '2',
      title: 'Achievement Unlocked',
      message: 'Congratulations! Youve solved 100 problems on CodeForces.',
    },
  ]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleLogout = () => {
    setShowLogoutConfirmation(true);
  };

  const confirmLogout = () => {
    // Handle logout logic here
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    localStorage.removeItem("isLogin");
    sessionStorage.removeItem("isLogin");
    // setIsLogin(false);
    navigate('/');
    setShowLogoutConfirmation(false);
  };

  const cancelLogout = () => {
    setShowLogoutConfirmation(false);
  };

    const openPasswordModal = () => {
    setShowPasswordModal(true);
  };

  const closePasswordModal = () => {
    setShowPasswordModal(false);
  };

  const savePassword = () => {
    // Handle save password logic
    // For now, just close the modal
    closePasswordModal();
  };

    const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    setPasswordData(prev => ({ ...prev, [id]: value }));
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>User Profile</h1>

      <form className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor="name" className={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <button type="button" className={styles.changePasswordButton} onClick={openPasswordModal}>
            <span>Change Password</span>
          </button>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="atcoder" className={styles.label}>AtCoder</label>
          <input
            type="text"
            id="atcoder"
            value={formData.atcoder}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="codechef" className={styles.label}>CodeChef</label>
          <input
            type="text"
            id="codechef"
            value={formData.codechef}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="codeforces" className={styles.label}>Codeforces</label>
          <input
            type="text"
            id="codeforces"
            value={formData.codeforces}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="codingNinjas" className={styles.label}>Coding Ninjas</label>
          <input
            type="text"
            id="codingNinjas"
            value={formData.codingNinjas}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="geeksForGeeks" className={styles.label}>GeeksForGeeks</label>
          <input
            type="text"
            id="geeksForGeeks"
            value={formData.geeksForGeeks}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="leetcode" className={styles.label}>LeetCode</label>
          <input
            type="text"
            id="leetcode"
            value={formData.leetcode}
            onChange={handleInputChange}
            className={styles.input}
          />
        </div>
      </form>

      <div className={styles.notificationsSection}>
        <h2 className={styles.notificationsHeader}>Notifications</h2>
        {notifications.map((notification) => (
          <div key={notification.id} className={styles.notification}>
            <h3 className={styles.notificationTitle}>{notification.title}</h3>
            <p className={styles.notificationMessage}>{notification.message}</p>
          </div>
        ))}
      </div>

      <div className={styles.footer}>
        <button onClick={handleLogout} className={styles.secondaryButton}>
          {/* <LogOut size={18} style={{ marginRight: '0.5rem' }} /> */}
          <span>Logout</span>
        </button>
      </div>

      {showLogoutConfirmation && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalHeader}>Confirm Logout</h3>
            <div className={styles.modalActions}>
              <button onClick={cancelLogout} className={styles.secondaryButton}>
                <span>Cancel</span>
              </button>
              <button onClick={confirmLogout} className={styles.primaryButton}>
                <span>Confirm</span>
              </button>
            </div>
          </div>
        </div>
      )}
            {showPasswordModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h3 className={styles.modalHeader}>Change Password</h3>
            <div className={styles.formGroup}>
              <label htmlFor="currentPassword" className={styles.label}>Current Password</label>
              <input
                type="password"
                id="currentPassword"
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="newPassword" className={styles.label}>New Password</label>
              <input
                type="password"
                id="newPassword"
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                className={styles.input}
              />
            </div>
            <div className={styles.modalActions}>
              <button onClick={closePasswordModal} className={styles.secondaryButton}>
                <span>Cancel</span>
              </button>
              <button onClick={savePassword} className={styles.primaryButton}>
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}