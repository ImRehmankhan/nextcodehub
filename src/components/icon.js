"use client";

import { 
  LogOut, Menu, Search, Plus, Edit2, Trash2, Eye, Tag, Layers, FileText, Grid, Star, Heart, 
  MessageSquare, Sun, Moon, BookOpen, Bold, Italic, Underline, Strikethrough, Heading, Heading2, 
  Heading3, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, Link, Image, Upload, Code, 
  Quote, X, ThumbsUp, ThumbsDown, Share2, Bookmark, ChevronRight, Calendar, Phone, Mail, 
  MapPin, Twitter, Github, Linkedin, Send, HelpCircle, Lightbulb, Users, Bell, Settings,
  AlertTriangle, Info, MessageCircle
} from "lucide-react";

const ICONS = {
  logout: LogOut,
  menu: Menu,
  search: Search,
  plus: Plus,
  edit: Edit2,
  trash: Trash2,
  eye: Eye,
  tag: Tag,
  layers: Layers,
  file: FileText,
  grid: Grid,
  star: Star,
  heart: Heart,
  message: MessageSquare,
  sun: Sun,
  moon: Moon,
  book: BookOpen,
  // Editor icons
  bold: Bold,
  italic: Italic,
  underline: Underline,
  strikethrough: Strikethrough,
  heading: Heading,
  "heading-2": Heading2,
  "heading-3": Heading3,
  list: List,
  "list-ordered": ListOrdered,
  "align-left": AlignLeft,
  "align-center": AlignCenter,
  "align-right": AlignRight,
  link: Link,
  image: Image,
  upload: Upload,
  code: Code,
  quote: Quote,
  x: X,
  // Blog interaction icons
  "thumbs-up": ThumbsUp,
  "thumbs-down": ThumbsDown,
  "share-2": Share2,
  bookmark: Bookmark,
  "chevron-right": ChevronRight,
  calendar: Calendar,
  phone: Phone,
  mail: Mail,
  "map-pin": MapPin,
  twitter: Twitter,
  github: Github,
  linkedin: Linkedin,
  send: Send,
  "help-circle": HelpCircle,
  lightbulb: Lightbulb,
  users: Users,
  bell: Bell,
  settings: Settings,
  "alert-triangle": AlertTriangle,
  info: Info,
  "message-circle": MessageCircle,
  // semantic aliases
  dashboard: Grid,
  posts: FileText,
  categories: Layers,
};

export default function Icon({ name, className, ...props }) {
  const Comp = ICONS[name];
  if (!Comp) return null;
  return <Comp className={className} {...props} />;
}
