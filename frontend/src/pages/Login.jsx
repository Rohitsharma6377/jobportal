import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../store/slices/authSlice';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('Required'),
            password: Yup.string()
                .min(6, 'Must be 6 characters or more')
                .required('Required')
        }),
        onSubmit: async (values) => {
            const resultAction = await dispatch(loginUser(values));
            if (loginUser.fulfilled.match(resultAction)) {
                navigate('/dashboard');
            }
        }
    });

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow">
                <h2 className="text-center text-3xl font-bold">Login</h2>
                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded">
                        {error}
                    </div>
                )}
                <form onSubmit={formik.handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            {...formik.getFieldProps('email')}
                            className="mt-1 block w-full rounded border border-gray-300 p-2"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <div className="text-red-600 text-sm">{formik.errors.email}</div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            {...formik.getFieldProps('password')}
                            className="mt-1 block w-full rounded border border-gray-300 p-2"
                        />
                        {formik.touched.password && formik.errors.password && (
                            <div className="text-red-600 text-sm">{formik.errors.password}</div>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? 'Loading...' : 'Login'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login; 