"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronRight, Clock, ArrowRight, Star, Brain } from "lucide-react";

const ProblemPreview = () => {
  const [activeTab, setActiveTab] = useState(0);

  const problems = [
    {
      id: "p001",
      title: "Divisor Count",
      difficulty: "Easy",
      timeLimit: "1 second",
      description:
        "Given a number `n`, calculate how many divisors it has. A divisor is a number that divides `n` without leaving a remainder.",
      sampleInput: "Number: 12",
      sampleOutput: "Divisors: 6",
      points: 80,
      tags: ["Math", "Number Theory"],
    },
    {
      id: "p002",
      title: "Shortest Path",
      difficulty: "Hard",
      timeLimit: "2 seconds",
      description:
        "Find the shortest path between two nodes in a weighted graph where the edge weights are positive integers.",
      sampleInput:
        "Nodes: 5, Edges: [(0,1,10), (0,2,3), (1,2,1), (1,3,2), (2,1,4), (2,3,8), (2,4,2), (3,4,7)], Start: 0, End: 4",
      sampleOutput: "0 -> 2 -> 4 (Total: 5)",
      points: 150,
      tags: ["Graphs", "Dijkstra"],
    },
    {
      id: "p003",
      title: "Binary Search",
      difficulty: "Medium",
      timeLimit: "1 second",
      description:
        "Given a sorted array of integers and a target number, find the index of the target using binary search.",
      sampleInput: "Array: [1, 3, 5, 7, 9], Target: 5",
      sampleOutput: "Index: 2",
      points: 120,
      tags: ["Binary Search", "Arrays"],
    },
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Hard":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-olympiad-navy mb-4">
            Sample Problem Archive
          </h2>
          <div className="h-1 w-20 bg-olympiad-blue mb-6"></div>
          <p className="text-olympiad-gray text-lg max-w-3xl">
            Explore our collection of algorithmic challenges used in Olympiads
            preparation. Practice with our provided resources to prepare for the
            competition.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3">
            <div className="glass-card rounded-lg shadow-md overflow-hidden">
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-olympiad-navy mb-4">
                  Featured Problems
                </h3>
                <div className="space-y-3">
                  {problems.map((problem, index) => (
                    <button
                      key={problem.id}
                      className={`w-full text-left p-4 rounded-lg transition-colors flex items-start justify-between ${
                        activeTab === index
                          ? "bg-blue-50 border border-blue-100"
                          : "bg-gray-50 hover:bg-gray-100"
                      }`}
                      onClick={() => setActiveTab(index)}
                    >
                      <div>
                        <span className="font-medium text-olympiad-navy">
                          {problem.title}
                        </span>
                        <div className="flex items-center mt-2 space-x-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(
                              problem.difficulty
                            )}`}
                          >
                            {problem.difficulty}
                          </span>
                          <span className="text-xs flex items-center text-gray-500">
                            <Clock className="h-3 w-3 mr-1" />
                            {problem.timeLimit}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`h-5 w-5 transform transition-transform ${
                          activeTab === index
                            ? "rotate-90 text-olympiad-blue"
                            : "text-gray-400"
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div className="mt-6">
                  <Link
                    href="/problems"
                    className="inline-flex items-center text-olympiad-blue hover:text-olympiad-darkBlue"
                  >
                    View all problems
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="glass-card rounded-lg shadow-md h-full">
              <div className="p-6 md:p-8 h-full">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-olympiad-navy">
                      {problems[activeTab].title}
                    </h3>
                    <div className="flex flex-wrap items-center mt-2 gap-2">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(
                          problems[activeTab].difficulty
                        )}`}
                      >
                        {problems[activeTab].difficulty}
                      </span>
                      <span className="text-xs flex items-center text-gray-500">
                        <Clock className="h-3 w-3 mr-1" />
                        {problems[activeTab].timeLimit}
                      </span>
                      <span className="text-xs flex items-center text-gray-500">
                        <Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
                        {problems[activeTab].points} points
                      </span>
                    </div>
                  </div>
                  <Link
                    href={`/problems/${problems[activeTab].id}`}
                    className="btn-primary rounded-full text-sm px-4 py-2"
                  >
                    Solve Problem
                  </Link>
                </div>

                <div className="bg-white rounded-lg border border-gray-100 p-4 mb-6">
                  <h4 className="font-medium text-olympiad-navy mb-2">
                    Problem Description
                  </h4>
                  <p className="text-olympiad-gray">
                    {problems[activeTab].description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-olympiad-navy mb-2">
                      Sample Input
                    </h4>
                    <pre className="font-mono text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                      {problems[activeTab].sampleInput}
                    </pre>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-medium text-olympiad-navy mb-2">
                      Expected Output
                    </h4>
                    <pre className="font-mono text-sm bg-gray-100 p-3 rounded overflow-x-auto">
                      {problems[activeTab].sampleOutput}
                    </pre>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {problems[activeTab].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-50 text-olympiad-blue text-xs rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 glass-card rounded-lg p-8 md:p-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-olympiad-navy mb-4">
                Ready to Challenge Yourself?
              </h3>
              <p className="text-olympiad-gray">
                Join other competitive participants worldwide in the next
                Informatics Olympiad. Registration is now closed for schools
                registering their teams.
              </p>

              <Link
                href="/resources"
                className="btn-outline rounded-full mt-6"
              >
                Preparation Resources
              </Link>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-blue-100 opacity-50 animate-pulse"></div>
                <div className="relative bg-white rounded-full p-5 shadow-lg">
                  <Brain className="h-20 w-20 text-olympiad-blue" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemPreview;
