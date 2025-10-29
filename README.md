# 🎓 Rate My Professor — SXU Edition

A web app designed for students at **Saint Xavier University** to explore majors, view professors, and eventually leave reviews on courses and instructors. The goal is to help students make informed academic decisions based on real student experiences.

---

## 🌟 Key Features

- ✅ Browse all SXU majors and minors  
- ✅ View professors organized by department  
- ✅ Account creation using Supabase Auth  
- ✅ Clean and modern UI with React  
- ✅ Bulk-loaded courses & professors via CSV into Supabase  
- 🔜 Leave reviews + ratings for professors  
- 🔜 Search bar for quick professor lookup  
- 🔜 Sorting + filtering by rating, difficulty, major  

This project is actively being developed!

---

## 🏗 Tech Stack

| Area | Technology |
|------|------------|
| Frontend | React + JSX + CSS |
| Backend | Supabase Auth + Supabase APIs |
| Database | PostgreSQL (Supabase) |
| Tools | Node.js, Vite |

---

## 📸 App Preview

Home Page  
Browse majors → list of all SXU departments  
Each major will load its relevant professors from the database

(Screenshots will be added after UI + data load finish)

---

## 🗄 Database Structure (Supabase)

| Table | Description |
|-------|-------------|
| `majors` | Contains SXU majors + minors |
| `professors` | List of instructors connected to majors |
| `courses` | Course names, numbers, and associated major |
| `reviews` | Coming soon: Ratings + comments per professor |

CSV imports have been completed for majors, professors, and courses ✅

---

## ⚙️ Local Development Setup

Clone the repo
```bash
git clone https://github.com/victorg224/my-rateprofessor.git
cd my-rateprofessor

