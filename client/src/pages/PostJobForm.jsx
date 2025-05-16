import React, { useState } from 'react';
import axios from 'axios';

const PostJobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
    salary: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/jobs', formData);
      setMessage('✅ Job posted successfully!');
      setFormData({ title: '', company: '', location: '', description: '', salary: '' });
    } catch (err) {
      setMessage('❌ Error posting job.');
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-12 bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-3xl shadow-2xl">
      <h2 className="text-3xl font-extrabold text-indigo-700 text-center mb-6">🚀 Post a New Job</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-indigo-600 font-semibold mb-1">Job Title</label>
          <input
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Frontend Developer"
            className="w-full px-4 py-2 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-indigo-600 font-semibold mb-1">Company Name</label>
          <input
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="e.g. OpenAI"
            className="w-full px-4 py-2 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-indigo-600 font-semibold mb-1">Location</label>
          <input
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. San Francisco, CA"
            className="w-full px-4 py-2 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-indigo-600 font-semibold mb-1">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the role, responsibilities, and requirements..."
            rows="4"
            className="w-full px-4 py-2 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div>
          <label className="block text-indigo-600 font-semibold mb-1">Salary (Optional)</label>
          <input
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            placeholder="e.g. $80,000 - $120,000"
            className="w-full px-4 py-2 border border-indigo-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-indigo-600 text-white text-lg font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200"
        >
          Post Job
        </button>
      </form>

      {message && (
        <p className={`mt-6 text-center font-medium ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default PostJobForm;
