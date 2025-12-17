import { Bell, CreditCard, Lock, Palette, User, Globe, Moon } from "lucide-react";

export default function SettingsPage() {
    return (
        <div className="max-w-2xl mx-auto space-y-8">
            <div>
                <h1 className="text-2xl font-bold text-slate-900">Settings</h1>
                <p className="text-slate-500">Manage your account preferences and configurations.</p>
            </div>

            <div className="space-y-6">

                {/* Account Settings */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                            <User className="h-4 w-4 text-blue-600" />
                            Account
                        </h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <div className="font-medium text-slate-900">Profile Information</div>
                                <div className="text-sm text-slate-500">Update your photo and personal details</div>
                            </div>
                            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                                Edit
                            </button>
                        </div>
                        <div className="flex items-center justify-between py-2 border-t border-slate-100 pt-4">
                            <div>
                                <div className="font-medium text-slate-900">Language</div>
                                <div className="text-sm text-slate-500">English (United States)</div>
                            </div>
                            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                                Change
                            </button>
                        </div>
                    </div>
                </div>

                {/* Appearance */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                            <Palette className="h-4 w-4 text-blue-600" />
                            Appearance
                        </h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <div className="font-medium text-slate-900">Theme</div>
                                <div className="text-sm text-slate-500">Customize dashboard look and feel</div>
                            </div>
                            <div className="flex gap-2">
                                <div className="h-8 w-8 rounded-full bg-slate-100 border border-slate-200 cursor-pointer hover:ring-2 ring-blue-500 transition-all" title="Light" />
                                <div className="h-8 w-8 rounded-full bg-slate-900 border border-slate-700 cursor-pointer hover:ring-2 ring-blue-500 transition-all" title="Dark" />
                                <div className="h-8 w-8 rounded-full bg-blue-600 border border-blue-700 cursor-pointer hover:ring-2 ring-blue-500 transition-all ring-2 ring-offset-2" title="Blue (Active)" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                            <Bell className="h-4 w-4 text-blue-600" />
                            Notifications
                        </h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <div className="font-medium text-slate-900">Email Notifications</div>
                                <div className="text-sm text-slate-500">Receive weekly digests and updates</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" defaultChecked />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                        <div className="flex items-center justify-between py-2 border-t border-slate-100 pt-4">
                            <div>
                                <div className="font-medium text-slate-900">Push Notifications</div>
                                <div className="text-sm text-slate-500">Real-time alerts for project activity</div>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer">
                                <input type="checkbox" className="sr-only peer" />
                                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Security */}
                <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
                        <h2 className="font-semibold text-slate-900 flex items-center gap-2">
                            <Lock className="h-4 w-4 text-blue-600" />
                            Security
                        </h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="flex items-center justify-between py-2">
                            <div>
                                <div className="font-medium text-slate-900">Password</div>
                                <div className="text-sm text-slate-500">Last changed 3 months ago</div>
                            </div>
                            <button className="px-3 py-1.5 text-sm font-medium text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">
                                Update
                            </button>
                        </div>
                        <div className="flex items-center justify-between py-2 border-t border-slate-100 pt-4">
                            <div>
                                <div className="font-medium text-slate-900">Two-Factor Authentication</div>
                                <div className="text-sm text-slate-500">Add an extra layer of security</div>
                            </div>
                            <button className="px-3 py-1.5 text-sm font-medium text-blue-600 bg-blue-50 border border-blue-100 rounded-lg hover:bg-blue-100 transition-colors">
                                Enable
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
