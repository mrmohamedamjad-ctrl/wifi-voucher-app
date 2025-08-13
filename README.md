# WiFi Voucher & Expenses Tracking System (MVP)

Features implemented (from your planner PDF):
- Roles: super_admin, manager, staff (JWT-based auth)
- Vouchers (create, list, edit/delete restricted to super admin)
- Payments (cash/card) linked to vouchers
- Expenses (create by manager/super, edit/delete by super)
- Collections (per staff; manager can view by staff; staff restricted to own)
- Day-end report totals (income, expenses, collections, profit)
- Swagger docs at `/docs`
- SQLite database (file-based) with seed data

## Quick start
1) Install Node.js >= 18
2) Unzip this folder
3) Run:
```bash
npm install
npm run seed   # creates DB + seed data
npm start
```
Open http://localhost:8080/docs to explore endpoints.

## Default users (after seeding)
- Super Admin: phone `0700000000` / password `owner123`
- Manager: phone `0700000001` / password `manager123`
- Staff: phone `0700000002` / password `staff123`

## Next steps
- Frontend UI (React or your preferred stack) using these endpoints
- SMS password reset (Twilio/MessageBird) & staff-login notification to Super Admin
- Pagination & search indexes
- PDF export for day-end report
- Audit log viewers & print-friendly views
- Hardening: rate limiting, password hashing with bcrypt/argon2, environment secrets
