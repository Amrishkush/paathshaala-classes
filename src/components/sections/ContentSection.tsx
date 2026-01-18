'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

const ContentSection = () => {
  const [classValue, setClassValue] = useState('');
  const [subjectValue, setSubjectValue] = useState('');
  const [chapterValue, setChapterValue] = useState('');
  const [isNotesDialogOpen, setIsNotesDialogOpen] = useState(false);
  const [isVideosDialogOpen, setIsVideosDialogOpen] = useState(false);

  // Get chapters based on class and subject selection
  const getChapters = () => {
    if (classValue === 'class12' && subjectValue === 'chemistry') {
      return [{ value: 'haloalkanes-haloarenes', label: 'Haloalkanes and Haloarenes' }];
    }
    // Default chapters for other combinations
    return [
      { value: 'chapter1', label: 'Chapter 1' },
      { value: 'chapter2', label: 'Chapter 2' },
      { value: 'chapter3', label: 'Chapter 3' },
      { value: 'chapter4', label: 'Chapter 4' },
    ];
  };

  const handleNotesOk = () => {
    if (classValue && subjectValue && chapterValue) {
      console.log(`Selected Class: ${classValue}, Subject: ${subjectValue}, Chapter: ${chapterValue}`);
      
      // If Class 12 Chemistry - Haloalkanes and Haloarenes, open the PDF
      if (classValue === 'class12' && subjectValue === 'chemistry' && chapterValue === 'haloalkanes-haloarenes') {
        window.open('/haloalkane.pdf', '_blank');
      } else {
        // For other selections, open placeholder
        window.open('https://drive.google.com', '_blank');
      }
      setIsNotesDialogOpen(false);
    }
  };

  const handleVideosOk = () => {
    if (classValue && subjectValue && chapterValue) {
      console.log(`Selected Class: ${classValue}, Subject: ${subjectValue}, Chapter: ${chapterValue}`);
      
      // If Class 12 Chemistry - Haloalkanes and Haloarenes, open the PDF
      if (classValue === 'class12' && subjectValue === 'chemistry' && chapterValue === 'haloalkanes-haloarenes') {
        window.open('/haloalkane.pdf', '_blank');
      } else {
        // For other selections, open placeholder
        window.open('https://drive.google.com', '_blank');
      }
      setIsVideosDialogOpen(false);
    }
  };

  return (
    <section className="min-h-screen bg-transparent flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <motion.h1 
            className="text-4xl md:text-7xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Welcome to{' '}
            <span className="text-red-500">
              Paathshaala Classes
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Your Future Our Mission. 
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row justify-center gap-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Notes Button */}
            <Dialog open={isNotesDialogOpen} onOpenChange={setIsNotesDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-transparent text-white hover:bg-orange-500 hover:text-white px-12 py-4 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white hover:border-orange-500">
                  Notes
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Select Notes</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Select value={classValue} onValueChange={(value) => { setClassValue(value); setSubjectValue(''); setChapterValue(''); }}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="class9">Class 9</SelectItem>
                      <SelectItem value="class10">Class 10</SelectItem>
                      <SelectItem value="class11">Class 11</SelectItem>
                      <SelectItem value="class12">Class 12</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={subjectValue} onValueChange={(value) => { setSubjectValue(value); setChapterValue(''); }} disabled={!classValue}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                      <SelectItem value="biology">Biology</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={chapterValue} onValueChange={setChapterValue} disabled={!subjectValue}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Chapter" />
                    </SelectTrigger>
                    <SelectContent>
                      {getChapters().map((chapter) => (
                        <SelectItem key={chapter.value} value={chapter.value}>
                          {chapter.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button 
                    onClick={handleNotesOk} 
                    className="w-full"
                    disabled={!classValue || !subjectValue || !chapterValue}
                  >
                    Access Notes
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Videos Button */}
            <Dialog open={isVideosDialogOpen} onOpenChange={setIsVideosDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-transparent text-white hover:bg-red-500 hover:text-white px-12 py-4 text-xl font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border-2 border-white hover:border-red-500">
                  Videos
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Select Videos</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <Select value={classValue} onValueChange={(value) => { setClassValue(value); setSubjectValue(''); setChapterValue(''); }}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Class" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="class9">Class 9</SelectItem>
                      <SelectItem value="class10">Class 10</SelectItem>
                      <SelectItem value="class11">Class 11</SelectItem>
                      <SelectItem value="class12">Class 12</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={subjectValue} onValueChange={(value) => { setSubjectValue(value); setChapterValue(''); }} disabled={!classValue}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="math">Mathematics</SelectItem>
                      <SelectItem value="physics">Physics</SelectItem>
                      <SelectItem value="chemistry">Chemistry</SelectItem>
                      <SelectItem value="biology">Biology</SelectItem>
                      <SelectItem value="english">English</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select value={chapterValue} onValueChange={setChapterValue} disabled={!subjectValue}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Chapter" />
                    </SelectTrigger>
                    <SelectContent>
                      {getChapters().map((chapter) => (
                        <SelectItem key={chapter.value} value={chapter.value}>
                          {chapter.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  <Button 
                    onClick={handleVideosOk} 
                    className="w-full"
                    disabled={!classValue || !subjectValue || !chapterValue}
                  >
                    Access Videos
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;


