import Header from '@/components/home/Header';
import Projects from '@/components/home/Projects';
import TopLeftGradient from '@/components/others/TopLeftGradient';
import TopRightGradient from '@/components/others/TopRightGradient';
import Footer from '@/components/shared/Footer';
import { baseUrl } from '@/services/constant';

export default async function Home() {
  const projectsData = await getProjectsData();
  const projects = await projectsData?.data;

  return (
    <main>
      {/* Gradients in the right side and the left side of the top of the page */}
      <TopLeftGradient></TopLeftGradient>
      <TopRightGradient></TopRightGradient>
      {/* ------ */}

      <Header></Header>
      <Projects projects={projects}></Projects>
      <Footer></Footer>
    </main>
  );
}

async function getProjectsData() {
  try {
    const res = await fetch(`${baseUrl}/project/all`, {
      cache: 'no-store',
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    const data = res.json();

    return data || [];
  } catch (error) {
    console.log("error while fetching projects",error);
  }
}
