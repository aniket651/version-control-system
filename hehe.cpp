#include <iostream>
#include <string>
#include <unordered_map>
#include <vector>
#include <sstream>
#include <crypto++/sha.h> // Include a cryptographic library for hashing

using namespace std;
using namespace CryptoPP;

// Define a struct to represent a Blob object
struct Blob {
  string content;
  string hash;

  // Calculate SHA-1 hash of the blob content
  void calculateHash() {
    SHA sha;
    byte digest[SHA::DIGESTSIZE];
    sha.CalculateDigest(digest, (const byte*)content.data(), content.size());
    stringstream ss;
    for (int i = 0; i < SHA::DIGESTSIZE; ++i) {
      ss << hex << setw(2) << setfill('0') << (int)digest[i];
    }
    hash = ss.str();
  }
};

// Define a struct to represent a Tree object
struct Tree {
  unordered_map<string, string> entries; // Map of filename -> Blob hash

  // Add a file (Blob) to the tree
  void addFile(const string& filename, const Blob& blob) {
    entries[filename] = blob.hash;
  }
};

// Define a struct to represent a Commit object
struct Commit {
  string message;
  string author;
  time_t timestamp;
  Tree* tree; // Pointer to the referenced Tree object

  // Constructor with basic details
  Commit(const string& msg, const string& auth) : message(msg), author(auth), timestamp(time(nullptr)) {}
};

int main() {
  // Create some Blobs (simulating files)
  Blob blob1;
  blob1.content = "This is the content of file1.txt";
  blob1.calculateHash();

  Blob blob2;
  blob2.content = "This is the content of file2.txt";
  blob2.calculateHash();

  // Create a Tree with the Blobs
  Tree tree;
  tree.addFile("file1.txt", blob1);
  tree.addFile("file2.txt", blob2);

  // Create a Commit referencing the Tree
  Commit commit("Initial commit", "John Doe");
  commit.tree = &tree;

  // Simulate storing Blobs and Commit (not implemented here, would involve data structures)
  cout << "Blob1 hash: " << blob1.hash << endl;
  cout << "Blob2 hash: " << blob2.hash << endl;
  cout << "Commit message: " << commit.message << endl;

  return 0;
}