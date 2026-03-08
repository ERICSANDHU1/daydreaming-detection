"use client";
import { useState, useCallback } from "react";
import { Upload, FileText, Brain, Loader2, CheckCircle, AlertCircle, ArrowRight, Sparkles, ArrowLeft } from "lucide-react";

/* RESULT COMPONENT — unchanged logic */
function Result({ data, loading }: { data: any; loading: boolean }) {
  if (loading) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600 font-medium">Analyzing data...</p>
          <p className="text-sm text-gray-500 mt-2">This may take a few moments</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center px-8">
          <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 font-medium mb-2">No Results Yet</p>
          <p className="text-sm text-gray-400">Upload an image or enter text to begin analysis</p>
        </div>
      </div>
    );
  }

  const label = data?.label || data?.prediction || "N/A";
  const reasons = data?.reasons || [];
  const status = data?.status || (data?.prediction ? "success" : "N/A");
  const confidence = data?.confidence;

  return (
    <div className="h-full flex flex-col p-6 overflow-auto">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-green-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Analysis Complete</h3>
          <p className="text-sm text-gray-500">Results generated successfully</p>
        </div>
      </div>

      <div className="flex-1 space-y-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
          <p className="text-sm font-semibold text-gray-600 mb-2">Classification</p>
          <p className="text-3xl font-bold text-gray-900 capitalize">{label}</p>
        </div>

        {confidence !== undefined && (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
            <p className="text-sm font-semibold text-gray-600 mb-2">Confidence</p>
            <p className="text-2xl font-bold text-gray-900">{(confidence * 100).toFixed(2)}%</p>
          </div>
        )}

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
          <p className="text-sm font-semibold text-gray-600 mb-2">Status</p>
          <p className="text-2xl font-bold text-gray-900 capitalize">{status}</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
          <p className="text-sm font-semibold text-gray-600 mb-3">Reasons</p>
          {reasons.length > 0 ? (
            <ul className="space-y-2">
              {reasons.map((reason: string, index: number) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-800">{reason}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 italic">No specific reasons provided</p>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- LANDING PAGE ---------------- */
function LandingPage({ onStart }: { onStart: () => void }) {
  return (
    <main className="relative min-h-screen flex items-center justify-center p-6">

      {/* Your Requested Background */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white 
        bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),
        linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]
        bg-[size:6rem_4rem]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">

        <div className="inline-flex items-center justify-center w-24 h-24 bg-white shadow-lg 
          rounded-2xl border border-blue-100">
          <Brain className="w-12 h-12 text-blue-600" />
        </div>

        <h1 className="text-6xl font-bold text-gray-800">Daydreaming Detection</h1>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          AI-powered multi-modal analysis for behavioral insights.
        </p>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">

          <div className="bg-white/70 backdrop-blur-md border border-gray-100 p-6 rounded-xl shadow-sm">
            <Upload className="w-10 h-10 text-blue-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800">Image Analysis</h3>
            <p className="text-gray-500 text-sm">Upload photos for instant detection</p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-gray-100 p-6 rounded-xl shadow-sm">
            <FileText className="w-10 h-10 text-indigo-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800">Text Analysis</h3>
            <p className="text-gray-500 text-sm">Analyze written content</p>
          </div>

          <div className="bg-white/70 backdrop-blur-md border border-gray-100 p-6 rounded-xl shadow-sm">
            <Sparkles className="w-10 h-10 text-purple-500 mx-auto mb-2" />
            <h3 className="font-semibold text-gray-800">AI Insights</h3>
            <p className="text-gray-500 text-sm">Receive structured feedback</p>
          </div>
        </div>

        <button
          onClick={onStart}
          className="px-12 py-4 bg-blue-600 text-white text-lg rounded-xl shadow-lg hover:bg-blue-700 transition-all flex items-center gap-2 mx-auto"
        >
          Start Analysis
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </main>
  );
}

/* ---------------- ANALYSIS PAGE ---------------- */
function AnalysisPage({ onBack }: { onBack: () => void }) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [textInput, setTextInput] = useState<string>("");
  const [analysisResult, setAnalysisResult] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"image" | "text">("image");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;
    setSelectedFile(file);
    setAnalysisResult(null);
    setError(null);

    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };
  
  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextInput(event.target.value);
  };

  const handleSubmit = useCallback(async () => {
    if (activeTab === "image" && !selectedFile) {
      setError("Please select a file to upload.");
      return;
    }

    if (activeTab === "text" && !textInput.trim()) {
      setError("Please enter text to analyze.");
      return;
    }

    setLoading(true);
    setError(null);
    setAnalysisResult(null);

    let apiUrl = "";
    let body: FormData | string;

    if (activeTab === "image") {
      apiUrl = "https://depression-detection-model.onrender.com/analyze";

      const formData = new FormData();
      formData.append("image", selectedFile!);

      body = formData;
    } else {
      apiUrl = "https://text-analyser-model.onrender.com/predict";
      body = JSON.stringify({ text: textInput });
    }

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: body,
        headers: activeTab === "text" ? { "Content-Type": "application/json" } : {},
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(`API error (${response.status}): ${text}`);
      }

      const data = await response.json();
      setAnalysisResult(data);
    } catch (err: any) {
      console.error("Analysis error:", err);
      setError(err.message || "An unknown error occurred.");
    } finally {
      setLoading(false);
    }
  }, [selectedFile, textInput, activeTab]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
      `}</style>
      
      {/* Top Navigation Bar */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <div className="text-left">
              <h1 className="text-lg font-bold text-gray-900">Daydreaming Detection</h1>
              <p className="text-xs text-gray-500">AI-Powered Behavioral Analysis</p>
            </div>
          </div>
          
          <div className="w-32"></div> {/* Spacer for symmetry */}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {/* Main Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fadeIn mt-6">
          {/* LEFT SIDE - Input */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
            {/* Tabs */}
            <div className="flex border-b border-gray-200 bg-gray-50">
              <button
                onClick={() => setActiveTab("image")}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "image"
                    ? "bg-white text-blue-600 border-b-2 border-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <Upload className="w-5 h-5" />
                Image Analysis
              </button>

              <button
                onClick={() => setActiveTab("text")}
                className={`flex-1 py-4 px-6 text-center font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
                  activeTab === "text"
                    ? "bg-white text-blue-600 border-b-2 border-blue-600 shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                <FileText className="w-5 h-5" />
                Text Analysis
              </button>
            </div>

            {/* Content Area - Scrollable */}
            <div className="flex-1 overflow-auto p-6">
              {activeTab === "image" ? (
                <div className="flex flex-col gap-6 h-full">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Upload Image</h3>
                    <p className="text-xs text-gray-500 mb-4">Select an image file for behavioral analysis</p>
                  </div>
                  
                  <label className="cursor-pointer">
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-400 hover:bg-blue-50 transition-all duration-200">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                      <p className="text-gray-700 font-medium mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-gray-500">
                        PNG, JPG or JPEG (MAX. 10MB)
                      </p>
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                  </label>

                  {imagePreview && (
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <p className="text-xs font-semibold text-gray-600 mb-2">Preview</p>
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="max-w-full max-h-80 mx-auto object-contain rounded-lg shadow-md"
                      />
                      {selectedFile && (
                        <p className="text-center text-sm text-gray-600 mt-3 truncate">
                          {selectedFile.name}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div className="h-full flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-700 mb-2">Text Input</h3>
                    <p className="text-xs text-gray-500">Enter content for behavioral pattern analysis</p>
                  </div>
                  
                  <textarea
                    value={textInput}
                    onChange={handleTextChange}
                    placeholder="Enter text for analysis...&#10;&#10;Type or paste the content you'd like to analyze for daydreaming indicators."
                    className="flex-1 w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all duration-200 resize-none font-sans text-gray-900 placeholder:text-gray-400"
                  />
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-xs text-gray-500">
                      {textInput.length} characters
                    </p>
                    {textInput.length > 0 && (
                      <button
                        onClick={() => setTextInput("")}
                        className="text-xs text-red-500 hover:text-red-700 font-medium"
                      >
                        Clear
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button - Fixed at bottom */}
            <div className="p-6 border-t border-gray-100 bg-gray-50">
              <button
                onClick={handleSubmit}
                disabled={loading || (activeTab === "image" && !selectedFile) || (activeTab === "text" && !textInput.trim())}
                className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <Brain className="w-5 h-5" />
                    Analyze {activeTab === "image" ? "Image" : "Text"}
                  </>
                )}
              </button>

              {/* Error Message */}
              {error && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-red-900">Error</p>
                      <p className="text-red-700 text-sm mt-1">{error}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT SIDE - Output */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden" style={{ height: 'calc(100vh - 200px)', minHeight: '600px' }}>
            <div className="h-full flex flex-col">
              <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-indigo-50">
                <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-blue-600" />
                  Analysis Results
                </h2>
                <p className="text-xs text-gray-500 mt-1">AI-generated insights and predictions</p>
              </div>
              <div className="flex-1 overflow-hidden">
                <Result data={analysisResult} loading={loading} />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-xl">
          <p className="text-center text-sm text-amber-900">
            <strong>Disclaimer:</strong> This tool is for educational and research purposes only and should not replace professional medical advice, diagnosis, or treatment.
          </p>
        </div>
      </div>
    </main>
  );
}

export default function Home() {
  const [showAnalysis, setShowAnalysis] = useState(false);

  if (!showAnalysis) {
    return <LandingPage onStart={() => setShowAnalysis(true)} />;
  }

  return <AnalysisPage onBack={() => setShowAnalysis(false)} />;
}