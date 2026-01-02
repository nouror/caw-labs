import { useState } from 'react';
import { db } from './firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Link } from 'react-router-dom';

function Admin() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    github: '',
    demo: '',
    tags: '',
    image: '' 
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "projects"), {
        ...formData,
        tags: formData.tags
          .split(',')
          .map(tag => tag.trim())
          .filter(tag => tag !== "")
      });

      alert("🚀 Project Added!");
      setFormData({
        title: '',
        description: '',
        github: '',
        demo: '',
        tags: '',
        image: ''
      });
    } catch (err) {
      alert("Error adding project: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-container">
      <Link to="/" className="back-link">← Back to Portfolio</Link>

      <div className="form-card">
        <h2>Admin Dashboard</h2>

        <form onSubmit={handleSubmit} className="admin-form">

          <label>Project Title</label>
          <input
            required
            value={formData.title}
            onChange={e =>
              setFormData({ ...formData, title: e.target.value })
            }
          />

          <label>Short Description</label>
          <textarea
            required
            value={formData.description}
            onChange={e =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <label>GitHub Link</label>
          <input
            type="url"
            value={formData.github}
            onChange={e =>
              setFormData({ ...formData, github: e.target.value })
            }
          />

          <label>Live Demo URL</label>
          <input
            type="url"
            value={formData.demo}
            onChange={e =>
              setFormData({ ...formData, demo: e.target.value })
            }
          />

          <label>Image</label>
          <input
            required
            value={formData.image}
            onChange={e =>
              setFormData({ ...formData, image: e.target.value })
            }
          />

          <label>Tags (comma separated)</label>
          <input
            value={formData.tags}
            onChange={e =>
              setFormData({ ...formData, tags: e.target.value })
            }
          />

          <button type="submit" disabled={loading}>
            {loading ? "Adding..." : "Add Project"}
          </button>

        </form>
      </div>
    </div>
  );
}

export default Admin;
