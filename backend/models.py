from sqlalchemy import Column, Integer, String, Text, Boolean
from database import Base

class Project(Base):
    __tablename__ = "projects"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    image_url = Column(String)
    demo_url = Column(String)
    repo_url = Column(String)
    tags = Column(String)  # Comma separated tags
    is_featured = Column(Boolean, default=False)

class Testimonial(Base):
    __tablename__ = "testimonials"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    role = Column(String)
    content = Column(Text)
    avatar_url = Column(String)
