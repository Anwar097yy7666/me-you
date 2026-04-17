

const root = document.getElementById('app') || document.body;

root.innerHTML = `
  <div class="app-shell">
    <aside class="sidebar">
      <div class="brand">
        <div class="brand-logo">M</div>
        <div>
          <h1>ManageraHub</h1>
          <p>Job application management</p>
        </div>
      </div>

      <nav class="menu">
        <button class="menu-item active">Dashboard</button>
        <button class="menu-item">Candidates</button>
        <button class="menu-item">Companies</button>
        <button class="menu-item">Offers</button>
        <button class="menu-item">Applications</button>
        <button class="menu-item">Reports</button>
      </nav>
    </aside>

    <main class="main-content">
      <header class="topbar">
        <div>
          <h2>Recruitment Dashboard</h2>
          <p>Manage companies, offers, and candidates in one place.</p>
        </div>
        <button class="primary-btn">+ Add new offer</button>
      </header>

      <section class="stats-grid">
        <div class="card stat-card">
          <span>Total Companies</span>
          <strong>128</strong>
        </div>
        <div class="card stat-card">
          <span>Active Offers</span>
          <strong>46</strong>
        </div>
        <div class="card stat-card">
          <span>Applications</span>
          <strong>892</strong>
        </div>
        <div class="card stat-card">
          <span>Interviews Planned</span>
          <strong>31</strong>
        </div>
      </section>

      <section class="content-grid">
        <div class="card table-card">
          <div class="section-head">
            <h3>Recent Applications</h3>
            <button class="ghost-btn">View all</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Candidate</th>
                <th>Position</th>
                <th>Company</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Anas B.</td>
                <td>Frontend Developer</td>
                <td>TechNova</td>
                <td><span class="badge review">In Review</span></td>
              </tr>
              <tr>
                <td>Salma K.</td>
                <td>UI/UX Designer</td>
                <td>Designify</td>
                <td><span class="badge accepted">Accepted</span></td>
              </tr>
              <tr>
                <td>Youssef M.</td>
                <td>Data Analyst</td>
                <td>SmartCore</td>
                <td><span class="badge pending">Pending</span></td>
              </tr>
              <tr>
                <td>Nadia T.</td>
                <td>Project Manager</td>
                <td>BuildOps</td>
                <td><span class="badge rejected">Rejected</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="card activity-card">
          <div class="section-head">
            <h3>Quick Actions</h3>
          </div>

          <div class="actions-list">
            <button class="action-btn">Create company account</button>
            <button class="action-btn">Publish new job offer</button>
            <button class="action-btn">Track candidate applications</button>
            <button class="action-btn">Export recruitment report</button>
          </div>
        </div>
      </section>
    </main>
  </div>
`;

const style = document.createElement('style');
style.textContent = `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif;
  }

  body {
    background: #f4f7fb;
    color: #1f2937;
  }

  .app-shell {
    display: grid;
    grid-template-columns: 260px 1fr;
    min-height: 100vh;
  }

  .sidebar {
    background: #111827;
    color: white;
    padding: 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .brand {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .brand-logo {
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: #2563eb;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
  }

  .brand h1 {
    font-size: 20px;
    margin-bottom: 4px;
  }

  .brand p {
    font-size: 13px;
    color: #9ca3af;
  }

  .menu {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .menu-item {
    border: none;
    background: transparent;
    color: #d1d5db;
    text-align: left;
    padding: 12px 14px;
    border-radius: 12px;
    cursor: pointer;
    font-size: 15px;
  }

  .menu-item.active,
  .menu-item:hover {
    background: #1f2937;
    color: white;
  }

  .main-content {
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }

  .topbar h2 {
    font-size: 28px;
    margin-bottom: 8px;
  }

  .topbar p {
    color: #6b7280;
  }

  .primary-btn,
  .ghost-btn,
  .action-btn {
    border: none;
    cursor: pointer;
    border-radius: 12px;
    font-size: 14px;
  }

  .primary-btn {
    background: #2563eb;
    color: white;
    padding: 14px 18px;
  }

  .ghost-btn {
    background: #e5e7eb;
    color: #111827;
    padding: 10px 14px;
  }

  .stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }

  .card {
    background: white;
    border-radius: 18px;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
  }

  .stat-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .stat-card span {
    color: #6b7280;
    font-size: 14px;
  }

  .stat-card strong {
    font-size: 30px;
  }

  .content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 18px;
  }

  .section-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 14px 10px;
    text-align: left;
    border-bottom: 1px solid #e5e7eb;
    font-size: 14px;
  }

  th {
    color: #6b7280;
    font-weight: 600;
  }

  .badge {
    display: inline-block;
    padding: 6px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 600;
  }

  .review {
    background: #dbeafe;
    color: #1d4ed8;
  }

  .accepted {
    background: #dcfce7;
    color: #15803d;
  }

  .pending {
    background: #fef3c7;
    color: #b45309;
  }

  .rejected {
    background: #fee2e2;
    color: #b91c1c;
  }

  .actions-list {
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .action-btn {
    background: #f9fafb;
    color: #111827;
    padding: 14px;
    text-align: left;
    border: 1px solid #e5e7eb;
  }

  .action-btn:hover,
  .primary-btn:hover,
  .ghost-btn:hover {
    opacity: 0.9;
  }

  @media (max-width: 980px) {
    .app-shell {
      grid-template-columns: 1fr;
    }

    .sidebar {
      padding-bottom: 10px;
    }

    .stats-grid,
    .content-grid {
      grid-template-columns: 1fr;
    }

    .topbar {
      flex-direction: column;
      align-items: flex-start;
    }
  }
`;

document.head.appendChild(style);